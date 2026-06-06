
import instaloader
import json
import os
import requests
from dotenv import load_dotenv

load_dotenv()

instagram_url = os.environ.get('INSTAGRAM_URL')
username = instagram_url.strip('/').split('/')[-1]

print(f"Scraping Instagram for: {username}")

# Setup directories
os.makedirs("data/raw", exist_ok=True)
os.makedirs("public/photos", exist_ok=True)
os.makedirs("public/videos", exist_ok=True)

L = instaloader.Instaloader(download_pictures=False, download_video_thumbnails=False, download_videos=False, download_geotags=False, download_comments=False, save_metadata=False)

try:
    profile = instaloader.Profile.from_username(L.context, username)
except Exception as e:
    print(f"Error fetching profile: {e}")
    exit(1)

profile_data = {
    "username": profile.username,
    "full_name": profile.full_name,
    "biography": profile.biography,
    "followers": profile.followers,
    "following": profile.followees,
    "is_business_account": profile.is_business_account,
    "business_category_name": profile.business_category_name,
    "external_url": profile.external_url,
    "profile_pic_url": profile.profile_pic_url,
}

with open("data/raw/profile.json", "w") as f:
    json.dump(profile_data, f, indent=4)

def download_file(url, path):
    try:
        r = requests.get(url, stream=True)
        r.raise_for_status()
        with open(path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

# Download profile picture
if profile.profile_pic_url:
    download_file(profile.profile_pic_url, "public/photos/profile_pic.jpg")
    profile_data['local_profile_pic'] = "public/photos/profile_pic.jpg"

posts_data = []
count = 0

print("Fetching posts...")
try:
    for post in profile.get_posts():
        if count >= 30:
            break
            
        post_info = {
            "id": post.shortcode,
            "caption": post.caption,
            "likes": post.likes,
            "comments": post.comments,
            "is_video": post.is_video,
            "url": post.url,
            "timestamp": str(post.date_utc),
            "media_url": post.video_url if post.is_video else post.url
        }
        
        # Download media
        try:
            if post.is_video and post.video_url:
                filename = f"public/videos/{post.shortcode}.mp4"
                if download_file(post.video_url, filename):
                    post_info['local_media_path'] = filename
            else:
                filename = f"public/photos/{post.shortcode}.jpg"
                if download_file(post.url, filename):
                    post_info['local_media_path'] = filename
        except Exception as e:
            print(f"Error handling media for {post.shortcode}: {e}")

        posts_data.append(post_info)
        count += 1
        print(f"Fetched post {count}")
except Exception as e:
    print(f"Error iterating posts: {e}")

with open("data/raw/posts.json", "w") as f:
    json.dump(posts_data, f, indent=4)

print("Scraping completed!")

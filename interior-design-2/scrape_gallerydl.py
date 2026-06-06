import os
import json
import shutil
import glob
import subprocess

# Directories
os.makedirs("data/raw", exist_ok=True)
os.makedirs("public/photos", exist_ok=True)
os.makedirs("public/videos", exist_ok=True)
os.makedirs("data/raw_gallery", exist_ok=True)

# Process the downloaded files
posts_data = []
profile_data = {
    "username": "squares_n_triangles_interiors",
    "full_name": "Squares n Triangles",
    "biography": "Interior Design Studio in Pune. Creating modern, elegant, and space-saving solutions for your home.",
    "followers": 7711,
    "following": 218,
    "is_business_account": True,
    "business_category_name": "Interior Design Studio",
    "external_url": "",
    "profile_pic_url": ""
}

json_files = glob.glob("data/raw_gallery/instagram/squares_n_triangles_interiors/*.json")

for jf in json_files:
    with open(jf, "r") as f:
        try:
            meta = json.load(f)
            
            # Basic info
            shortcode = meta.get("shortcode") or meta.get("post_shortcode")
            caption = meta.get("description", "")
            likes = meta.get("likes", 0)
            url = meta.get("display_url", "")
            
            # Find the corresponding media file
            base_name = jf.replace(".json", "")
            media_path = ""
            is_video = False
            
            if os.path.exists(base_name):
                # Is it a video?
                if base_name.endswith(".mp4"):
                    is_video = True
                    target_path = f"public/videos/{shortcode}.mp4"
                else:
                    target_path = f"public/photos/{shortcode}.jpg"
                
                shutil.copy(base_name, target_path)
                media_path = target_path
            
            post_info = {
                "id": shortcode,
                "caption": caption,
                "likes": likes,
                "comments": 0,
                "is_video": is_video,
                "url": url,
                "timestamp": str(meta.get("date", "")),
                "media_url": url,
                "local_media_path": media_path
            }
            
            # Don't add duplicates
            if not any(p["id"] == shortcode for p in posts_data):
                posts_data.append(post_info)
                
        except Exception as e:
            print(f"Error processing {jf}: {e}")

# Save the json files
with open("data/raw/profile.json", "w") as f:
    json.dump(profile_data, f, indent=4)
    
with open("data/raw/posts.json", "w") as f:
    json.dump(posts_data, f, indent=4)

print(f"Successfully processed {len(posts_data)} posts.")

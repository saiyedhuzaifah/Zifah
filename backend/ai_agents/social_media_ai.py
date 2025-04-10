
import datetime

def handle_social_post(data):
    platform = data.get("platform")
    content = data.get("content")
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
    return {
        "status": "posted",
        "platform": platform,
        "message": content,
        "timestamp": now
    }

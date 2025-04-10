
from backend.ai_agents.social_media_ai import handle_social_post

def dispatch_task(command):
    if command["action"] == "post_social":
        return handle_social_post(command)
    return {"error": "Command not understood."}


def interpret_command(text):
    text = text.lower()
    if "post" in text and "instagram" in text:
        return {"action": "post_social", "platform": "instagram", "content": text}
    return {"action": "unknown", "raw": text}

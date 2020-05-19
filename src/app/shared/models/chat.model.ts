export interface ChatMessage {
    sender: string
    message: string
    timestamp: any
}

export interface ChatData extends ChatMessage  {
    receiverId: string
    chatId: string
}
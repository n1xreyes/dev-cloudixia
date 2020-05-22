export interface ChatMessage {
    sender: string;
    message: string;
    timestamp: object;
}

export interface ChatData extends ChatMessage  {
    receiverId: string;
    chatId: string;
}

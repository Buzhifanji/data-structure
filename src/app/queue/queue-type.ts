interface dataType {
    name: string,
    id: number,
} 

export interface QueueType {
    title: string,
    action: Array<dataType>
}

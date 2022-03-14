export interface ApiResponse {
    status: string
    message: string
}

export interface Video {
    imageURL: string
    title: string
    description: string
    id: string
    obj_ID: number
}

export interface AllVideos extends ApiResponse {
    result: Array<Video>
}

export type ApiFetcherOptions = {
    url: string
    query: string
}

export type ApiFetcherResults<T> = {
    data: T
}

export default interface ApiConfig {
    apiUrl: string,
    fetch<T>(
        options : ApiFetcherOptions
    ): Promise<ApiFetcherResults<T>>
}
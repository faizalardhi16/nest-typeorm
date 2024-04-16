export type Output<T> = {
    statusCode: number;
    message: string;
    data: T
}

export class ResponseObject{
    async ok<T>(data:T): Promise<Output<T>>{
        return{
            statusCode: 200,
            message: 'Success to load data',
            data: data
        }
    }
}


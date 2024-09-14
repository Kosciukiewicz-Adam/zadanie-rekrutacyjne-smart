import { QueryStatus } from "../consts";

export const errorHandler = (status: QueryStatus, content: JSX.Element): JSX.Element => {
    switch (status) {
        case QueryStatus.ERROR:
            return <div>ERROR</div>;
        case QueryStatus.LOADING:
            return <div>Loading...</div>;
        default:
            return content;
    }
}
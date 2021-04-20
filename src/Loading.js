import { CircularProgress } from "@material-ui/core";
import './Loading.css'

function Loading() {
    return (
        <div>
            <div className="loading">
                <CircularProgress />
            </div>
        </div>
    )
}

export default Loading;

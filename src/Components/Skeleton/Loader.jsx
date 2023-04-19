import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () =>{
    return(
        <>
            <div style={{display:'flex', gap: '10px'}}>
                <div>
                    <Skeleton width={352} height={237}></Skeleton>
                    <Skeleton width={352} height={39}></Skeleton>
                </div>
                <div>
                    <Skeleton width={352} height={237}></Skeleton>
                    <Skeleton width={352} height={39}></Skeleton>
                </div>
                <div>
                    <Skeleton width={352} height={237}></Skeleton>
                    <Skeleton width={352} height={39}></Skeleton>
                </div>
            </div>
        </>
    )
}
export default Loader;
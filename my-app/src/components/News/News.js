
import style from '../News/News.module.css'
import { Cards } from '../Cards/Cards'



export const News = () =>{
    return(
        <div className={style.news}>
            <Cards/>
        </div>
    )
}
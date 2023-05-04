
import styles from '../App/App.module.css'
import { News } from '../News/News';
import {Title} from '../Title/Title';
import{Text} from '../Text/Text'



export const  App = () => {
  return (
    <div className ={styles.container}>
      <Title/>
      <Text/>
    <News/>
    </div>
  );
}

export default App;

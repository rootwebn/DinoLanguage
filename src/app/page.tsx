import s from '@/shared/styles/mainPage.module.scss'
import {HeaderMenu} from "@/widgets/ui/headerMenu/headerMenu";
import {HomePage} from "@/widgets/ui/homePage/homePage";

export default function Home() {
  return (
     <div className={s.mainContainer}>
       <HeaderMenu/>
       <HomePage/>
     </div>
  )
}

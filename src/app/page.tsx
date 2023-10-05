import s from '@/shared/styles/mainPage.module.scss';
import { HomePage } from '@/widgets/ui/homePage/homePage';

export default function Home() {
  return (
    <div className={s.mainContainer}>
      <HomePage />
    </div>
  );
}

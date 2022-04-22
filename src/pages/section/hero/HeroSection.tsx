import Link from 'next/link';
import RippleButton from '../../../components/ripple-button';
import utilStyles from '../../../styles/utils.module.css';
import heroStyles from './hero.module.css';

export default function HeroSection() {
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.heroIntro}>
        <div className="space-y-4 max-w-3xl w-full lg:mt-0 mt-4">
          <h1 className="leading-tight">
            <span className="block">Free short links </span>
            <div>
              <span>
                with{' '}
                <span className={utilStyles.fireUnderline}>
                  amazing results
                </span>
              </span>
            </div>
          </h1>
          <p className="sm:max-w-lg max-w-sm">
            Jxly is a URL shortener with power-packed batteries included for
            free to make your business unique.
          </p>

          <div className={heroStyles.actionArea}>
            <Link href="/">Get started for free</Link>
            <Link href="/">Want more features</Link>
            <RippleButton
              classes="bg-blue-400"
              rippleColor="yellow"
              text="ripple test"
            />
          </div>
        </div>
        <div className={heroStyles.heroImage}></div>
      </div>
    </section>
  );
}

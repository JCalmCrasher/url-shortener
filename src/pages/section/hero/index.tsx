import Button from '@/components/button/button';
import heroStyles from './hero.module.css';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className={heroStyles.heroIntro}>
        <div className="space-y-4 max-w-3xl w-full lg:mt-0 mt-4">
          <h1>
            <span className="block">Free short links </span>
            with <span className="fireUnderline">amazing results</span>
          </h1>
          <p className="sm:max-w-lg max-w-sm">
            Jxly is a URL shortener with power-packed batteries 🔋 included for
            free to make your business unique.
          </p>

          <div className={heroStyles.actionArea} aria-label="sign up">
            <Button
              classes="btn-primary btn-md"
              isUrl={true}
              text="Get started for free"
            />
            <Button
              classes="btn-secondary btn-md border border-sky-800"
              isUrl={true}
              text="Need more features ⚡️"
            />
          </div>
        </div>
        <div className={heroStyles.heroImage} aria-label="heatmap image"></div>
      </div>
    </section>
  );
}
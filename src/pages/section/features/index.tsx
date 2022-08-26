import Card from './components/card';
import featureStyles from './feature.module.css';
import { features } from '@/utils/helpers';

export default function FeatureSection() {
  return (
    <section id="feature">
      <h2 className="text-center mb-6">Fully-bodied URL shortener</h2>
      <div className={featureStyles.wrapper}>
        {features.map(({ title, src, description }) => (
          <Card key={title} title={title} src={src}>
            {description}
          </Card>
        ))}
      </div>
    </section>
  );
}

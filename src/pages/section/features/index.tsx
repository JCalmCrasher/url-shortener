import Card from './components/card';
import featureStyles from './feature.module.css';
import Badge from '@/components/badge';

export default function FeatureSection() {
  return (
    <section id="feature">
      <h2 className="text-center mb-6">Fully-bodied URL shortener</h2>
      <div className={featureStyles.wrapper}>
        <Card title="Link Management" src="/assets/share-link.svg">
          <p>Create Powerful & Shareable Links</p>
        </Card>
        <Card title="Dashboard & Reports" src="/assets/dashboard.svg">
          <p>View analytics and reports about your links</p>
          <div className="mt-3 text-center">
            <Badge text="coming soon" />
          </div>
        </Card>
        <Card title="Analytics" src="/assets/storage.svg">
          <p>Free Storage for your resources</p>
          <div className="mt-3 text-center">
            <Badge text="coming soon" />
          </div>
        </Card>
      </div>
    </section>
  );
}

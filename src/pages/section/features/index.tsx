import Card from './components/card';
import featureStyles from './feature.module.css';

export default function FeatureSection() {
  return (
    <section id="feature">
      <h2 className="text-center mb-6">Fully-bodied URL shortener</h2>
      <div className={featureStyles.wrapper}>
        <Card
          title="Link Management"
          description="Create Powerful & Shareable Links"
          src="/assets/share-link.svg"
        />
        <Card
          title="Dashboard & Reports"
          description="View analytics and reports about your links"
          src="/assets/dashboard.svg"
        />
        <Card
          title="Analytics"
          description="Free Storage for your resources"
          src="/assets/storage.svg"
        />
      </div>
    </section>
  );
}

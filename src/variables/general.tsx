import Badge from '@/components/badge';

export const APP_NAME = 'jxly';

export const NAVIGATION = [
  { name: 'Features', href: '/features', current: false },
  { name: 'Download', href: '/download', current: false }
];

export const features = [
  {
    title: 'Link Management',
    src: '/assets/share-link.svg',
    description: <p>Create Powerful & Shareable Links</p>
  },
  {
    title: 'Dashboard Management',
    src: '/assets/dashboard.svg',
    description: (
      <>
        <p className="mb-2">Manage Reports About Your Links</p>
        <div className="mt-3 text-center">
          <Badge text="coming soon" />
        </div>
      </>
    )
  },
  {
    title: 'Cloud Storage',
    src: '/assets/storage.svg',
    description: (
      <>
        <p>Next-gen Storage for Your Resources</p>
        <div className="mt-3 text-center">
          <Badge text="coming soon" />
        </div>
      </>
    )
  }
];

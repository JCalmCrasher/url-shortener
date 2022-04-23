import Button from '@/components/button/button';
import TextInput from '@/components/input/text-input';

export default function UrlSection() {
  return (
    <section id="url">
      <div className="flex md:flex-row flex-col md:justify-center space-x-3">
        <TextInput
          id="shorten-url"
          classes="max-w-lg w-full p-3 rounded-md"
          sx={{ placeholder: 'Shorten your link 😉' }}
        />
        <Button
          text="Shorten URL"
          classes="btn-secondary btn-md border border-sky-800 max-w-fit w-full"
        />
      </div>
    </section>
  );
}

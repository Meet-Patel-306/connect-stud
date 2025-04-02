import React from "react";
import Footer from "./Footer.jsx";

export default function NewsBlog() {
  return (
    <>
      <main class="pt-4 pb-8 lg:pt-8 lg:pb-12 bg-white dark:bg-gray-900 antialiased">
        <div class="flex flex-wrap justify-between items-center px-4 mx-auto max-w-screen-xl">
          <article class="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex flex-wrap items-center gap-4 mb-6 not-italic">
                <div class="flex items-center space-x-4 text-sm text-gray-900 dark:text-white">
                  <img
                    class="w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos Profile Picture"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, Educator & CEO Flowbite
                    </p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Best Practices for Successful Prototypes
              </h1>
            </header>

            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              But then I found a{" "}
              <a href="https://flowbite.com">
                component library based on Tailwind CSS called Flowbite
              </a>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </p>
            <figure class="my-6">
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt="Digital artwork"
                class="w-full max-w-lg mx-auto rounded-lg shadow-md"
              />
              <figcaption class="text-center text-gray-600 dark:text-gray-400 mt-2">
                Digital art by Anonymous
              </figcaption>
            </figure>

            <h2 class="text-3xl font-bold text-gray-900 dark:text-white leading-snug mt-8 mb-4">
              Getting started with Flowbite
            </h2>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              First of all you need to understand how Flowbite works. This
              library is not another framework. Rather, it is a set of
              components based on Tailwind CSS that you can just copy-paste from
              the documentation.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              It also includes a JavaScript file that enables interactive
              components, such as modals, dropdowns, and datepickers which you
              can optionally include into your project via CDN or NPM.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              You can check out the{" "}
              <a href="https://flowbite.com/docs/getting-started/quickstart/">
                quickstart guide
              </a>{" "}
              to explore the elements by including the CDN files into your
              project. But if you want to build a project with Flowbite I
              recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              You'll also receive a lot of useful application UI, marketing UI,
              and e-commerce pages that can help you get started with your
              projects even faster. You can check out this{" "}
              <a href="https://flowbite.com/docs/components/tables/">
                comparison table
              </a>{" "}
              to better understand the differences between the open-source and
              pro version of Flowbite.
            </p>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white leading-snug mt-8 mb-4">
              When does design come in handy?
            </h2>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              While it might seem like extra work at a first glance, here are
              some key moments in which prototyping will come in handy:
            </p>

            <ol class="list-decimal pl-6 space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Usability testing:</strong> Does your user know how to
                exit out of screens? Can they follow your intended user journey
                and buy something from the site you’ve designed? By running a
                usability test, you’ll be able to see how users will interact
                with your design once it’s live.
              </li>
              <li>
                <strong>Involving stakeholders:</strong> Need to check if your
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real.
              </li>
              <li>
                <strong>Impressing a client:</strong> Prototypes can help
                explain or even sell your idea by providing your client with a
                hands-on experience.
              </li>
              <li>
                <strong>Communicating your vision:</strong> By using an
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </li>
            </ol>

            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white leading-normal mt-6 mb-3">
              Laying the Groundwork for Best Design
            </h3>
            <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Let's start by including the CSS file inside the{" "}
              <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md">
                head
              </code>{" "}
              tag of your HTML.
            </p>

            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white leading-normal mt-6 mb-3">
              Understanding Typography
            </h3>

            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Type Properties
            </h4>
            <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>

            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Baseline
            </h4>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Measurement from the baseline
            </h4>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white leading-normal mt-6 mb-3">
              Type classification
            </h3>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Serif
            </h4>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Old-Style serifs
            </h4>
            <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul>

            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
              alt="Typography Example"
              class="w-full max-w-lg mx-auto my-4 rounded-lg shadow-md"
            />

            <ol class="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ol>

            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white leading-normal mt-6 mb-3">
              Laying the best for Successful Prototyping
            </h3>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
            <blockquote class="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
              <p class="text-lg leading-relaxed">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages, starting from login screens to complex
                dashboards. A perfect choice for your next SaaS application."
              </p>
            </blockquote>

            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Code Example
            </h4>

            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>

            <pre class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-scroll">
              <code class="language-html text-gray-900 dark:text-gray-300">
                &lt;dl class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-8 max-w-screen-md text-gray-900 dark:text-white mx-auto"&gt;
                &lt;div class="flex flex-col justify-center items-center p-4
                bg-white dark:bg-gray-900 rounded-lg shadow-md"&gt; &lt;dt
                class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt; &lt;dd
                class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;
                developers &lt;/dd&gt; &lt;/div&gt; &lt;div class="flex flex-col
                justify-center items-center p-4 bg-white dark:bg-gray-900
                rounded-lg shadow-md"&gt; &lt;dt class="mb-2 text-3xl
                font-extrabold"&gt;1B+&lt;/dt&gt; &lt;dd class="text-lg
                font-normal text-gray-500 dark:text-gray-400"&gt; contributors
                &lt;/dd&gt; &lt;/div&gt; &lt;div class="flex flex-col
                justify-center items-center p-4 bg-white dark:bg-gray-900
                rounded-lg shadow-md"&gt; &lt;dt class="mb-2 text-3xl
                font-extrabold"&gt;4M+&lt;/dt&gt; &lt;dd class="text-lg
                font-normal text-gray-500 dark:text-gray-400"&gt; organizations
                &lt;/dd&gt; &lt;/div&gt; &lt;/dl&gt;
              </code>
            </pre>

            <h4 class="text-xl font-semibold text-gray-900 dark:text-white leading-snug mt-4 mb-2">
              Table example
            </h4>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter.
            </p>

            <table class="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
              <thead class="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th class="px-6 py-3 text-left text-sm font-medium uppercase border-b dark:border-gray-600">
                    Country
                  </th>
                  <th class="px-6 py-3 text-left text-sm font-medium uppercase border-b dark:border-gray-600">
                    Date & Time
                  </th>
                  <th class="px-6 py-3 text-left text-sm font-medium uppercase border-b dark:border-gray-600">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-gray-700">
                  <td class="px-6 py-4">United States</td>
                  <td class="px-6 py-4">April 21, 2021</td>
                  <td class="px-6 py-4 font-bold">$2,300</td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <td class="px-6 py-4">Canada</td>
                  <td class="px-6 py-4">May 31, 2021</td>
                  <td class="px-6 py-4 font-bold">$300</td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <td class="px-6 py-4">United Kingdom</td>
                  <td class="px-6 py-4">June 3, 2021</td>
                  <td class="px-6 py-4 font-bold">$2,500</td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <td class="px-6 py-4">Australia</td>
                  <td class="px-6 py-4">June 23, 2021</td>
                  <td class="px-6 py-4 font-bold">$3,543</td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <td class="px-6 py-4">Germany</td>
                  <td class="px-6 py-4">July 6, 2021</td>
                  <td class="px-6 py-4 font-bold">$99</td>
                </tr>
                <tr>
                  <td class="px-6 py-4">France</td>
                  <td class="px-6 py-4">August 23, 2021</td>
                  <td class="px-6 py-4 font-bold">$2,540</td>
                </tr>
              </tbody>
            </table>

            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white leading-normal mt-6 mb-3">
              Best practices for setting up your prototype
            </h3>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <strong>Start from the inside out</strong>. A nice way to both
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out’. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              you’ll be able to create a prototype that puts your users’ needs
              at the heart of your design.
            </p>
            <p class="lead text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              And there you have it! Everything you need to design and share
              prototypes — right in Flowbite Figma.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

<template>
  <section>
    <div class="flex flex-col">
      <div class="px-5">
        <img src="https://air360.io/wp-content/uploads/2023/02/get-started.webp" class="w-100" alt="">
        <h1 class="text-center text-black-700 font-bold tracking-wide text-2xl my-4">
          Let's Get Started
        </h1>
        <p class="text-black-600 tracking-wide leading-7">
          Learn how Air360 can help you increase your conversion by 50% in less than 3 months.
          <br>
          Our eCommerce experience analytics platform helps you spot all opportunities to increase conversion & prioritize decisions to boost revenue fast.
          <br>
          Fill out the short form and book a quick call with a CRO expert so we can tailor our Air360 offer to your needs.
        </p>
        <div class="line-deco flex items-center py-[15px]">
          <span class="text-black-600 flex-shrink-0 mx-2.5">Trusted by</span>
        </div>
        <img src="https://air360.io/wp-content/uploads/2023/02/air360-customer-logos.svg" alt="">
      </div>
      <div class="form-bg-color dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <nuxt-img src="https://air360.io/wp-content/uploads/2023/02/air360-logo-horizontal-white.svg" />
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-    gray-900 dark:text-gray-300">Your email</label>
              <input id="email" type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input id="subject" type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-deco::before, .line-deco::after {
    display: block;
    content: '';
    border-bottom: 0;
    flex-grow: 1;
    border-top: 1px solid #000;
}

.form-bg-color {
    background: rgb(45,146,233);
}
</style>

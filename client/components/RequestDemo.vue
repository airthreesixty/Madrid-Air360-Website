<template>
  <section class="flex justify-center">
    <div class="flex flex-col max-w-screen-[1400px] md:flex-row">
      <div class="p-4 flex-1 md:p-8 lg:p-10">
        <div class="flex justify-center">
          <nuxt-img src="https://air360.io/wp-content/uploads/2023/02/get-started.webp" class="w-100" alt="" />
        </div>
        <div class="">
          <h1 class="text-center text-black-700 font-bold tracking-wide text-2xl md:text-4xl my-4">
            Let's Get Started
          </h1>
          <p class="text-black-600 tracking-wide leading-7">
            Learn how Air360 can help you increase your conversion by 50% in less than 3 months.
            <br>
            Our eCommerce experience analytics platform helps you spot all opportunities to increase conversion & prioritize decisions to boost revenue fast.
            <br>
            Fill out the short form and book a quick call with a CRO expert so we can tailor our Air360 offer to your needs.
          </p>
        </div>
        <div class="line-deco flex items-center py-[15px]">
          <span class="text-black-600 flex-shrink-0 mx-2.5">Trusted by</span>
        </div>
        <img src="https://air360.io/wp-content/uploads/2023/02/air360-customer-logos.svg" alt="">
      </div>
      <div class="form-bg-color py-16 md:flex-1 dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 lg:px-5 mx-auto max-w-screen-md">
          <div class="flex justify-end">
            <nuxt-img src="https://air360.io/wp-content/uploads/2023/02/air360-logo-horizontal-white.svg" class="w-23" />
          </div>
          <form action="#" class="bg-white p-2.5 mt-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:p-5" @submit.prevent="submitForm">
            <div>
              <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
              <input id="firstName" type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
            </div>
            <div>
              <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
              <input id="lastName" type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
            </div>

            <div class="col-span-2">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email<span class="text-red-500">*</span></label>
              <input id="email" v-model="formData.email" type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
              <span v-if="v$.email.$error" class="error-alert">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company name<span class="text-red-500">*</span></label>
              <input id="company" v-model="formData.company" type="text" class="block p-3 w-full text-sm text-black-700 bg-gray-50 rounded-lg border border-gray-300 shadow-sm  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
              <span v-if="v$.company.$error" class="error-alert">
                {{ v$.company.$errors[0].$message }}
              </span>
            </div>
            <div>
              <label for="sessions" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yearly sessions<span class="text-red-500">*</span></label>
              <select id="sessions" v-model="formData.sessions" name="sessions" class="block p-3 w-full text-sm font-medium text-black-700 bg-gray-50 rounded-lg border-gray-300 shadow-sm">
                <option disabled value>
                  Please Select
                </option>
                <option value="under 200 thousand">
                  &lt;200,000 Yearly
                </option>
                <option value="200 thousand - 1 Million">
                  200,000 - 1,000,000 Yearly
                </option>
                <option value="over 1 Million">
                  +1,000,000 Yearly
                </option>
              </select>
              <span v-if="v$.sessions.$error" class="error-alert">
                {{ v$.sessions.$errors[0].$message }}
              </span>
            </div>
            <div class="lg:col-span-2">
              <label for="goal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What is your website's conversion goal?<span class="text-red-500">*</span></label>
              <select id="goal" v-model="formData.goal" name="goal" class="block p-3 w-full text-sm font-medium text-black-700 bg-gray-50 rounded-lg border-gray-300 shadow-sm">
                <option disabled value>
                  Please Select
                </option>
                <option value="Sales Transactions">
                  Sales Transactions
                </option>
                <option value="Lead/Appointment Conversion">
                  Lead/Appointment Conversion
                </option>
                <option value="None of the above">
                  None of the above
                </option>
              </select>
              <span v-if="v$.goal.$error" class="error-alert">
                {{ v$.goal.$errors[0].$message }}
              </span>
            </div>
            <div class="lg:col-span-2">
              <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number<span class="text-red-500">*</span></label>
              <vue-tel-input v-model="formData.phone" mode="international" />
              <span v-if="v$.phone.$error" class="error-alert">
                {{ v$.phone.$errors[0].$message }}
              </span>
            </div>
            <div class="flex items-center lg:col-span-2">
              <input id="checkbox" v-model="formData.term" type="checkbox" class="rounded-sm focus:ring-0">
              <label for="checkbox" class="ml-2 text-black-600">I agree to receive other communications from ESW.</label>
            </div>
            <div class="flex justify-center my-7 lg:col-span-2">
              <button type="submit" class="py-3 px-6 text-base bg-[#e72192] tracking-wide font-medium text-center text-white rounded-[3px] bg-primary-700 sm:w-fit hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Submit
              </button>
            </div>
            <p class="mb-5 lg:col-span-2">
              Air360 by Scalefast is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you.

              You can unsubscribe from these communications at any time. For more information please review our Privacy Policy.

              By clicking on the button above, you consent to allow Scalefast to store and process the personal information submitted above to provide you the content requested.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'vue-tel-input/vue-tel-input.css'
import 'vue-toastification/dist/index.css'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'

const loading = ref(false)
const toast = useToast()

const formData = reactive({
  email: '',
  company: '',
  sessions: null,
  goal: null,
  phone: '',
  term: false
})

const rules = computed(() => {
  return {
    company: {
      required
    },
    email: {
      required,
      email
    },
    sessions: {
      required
    },
    goal: {
      required
    },
    phone: {
      required
    }
  }
})

const v$ = useVuelidate(rules, formData)

// const isFormValid = computed(() => {
//   if (formData.email && formData.company && formData.sessions && formData.goal && formData.phone && formData.term) {
//     return true
//   } else {
//     return false
//   }
// })
const submitForm = async () => {
  console.log(formData)
  const isFormCorrect = await v$.value.$validate()
  if (isFormCorrect) {
    // loading.value = true
    // await axios.post('https://api.form-data.com/f/gq31layf9m65mw704tcnmm', formData)
    // @ts-ignore
    // Air360.identify(formData.email)
    console.log('Hello')
    toast.success('The form was successfully submitted!', {
      timeout: 3000
    })
    // loading.value = false
    // isSuccess.value = !isSuccess.value
    // v$.value.$reset()
    // Object.assign(formData, { firstName: '', lastName: '', email: '', company: '', sessions: null, goal: null, phone: null, terms: false })
  }
  toast.error('Failed to submit the form.', {
    timeout: 3000
  })
}
</script>

<style lang="postcss">
.line-deco::before, .line-deco::after {
    display: block;
    content: '';
    border-bottom: 0;
    flex-grow: 1;
    border-top: 1px solid #000;
}

.form-bg-color {
    background: linear-gradient(126deg, rgba(45,146,233,1) 0%, rgba(100,74,213,1) 20%, rgba(193,65,172,1) 40%, rgba(231,33,146,1) 60%, rgba(240,77,102,1) 80%, rgba(253,112,67,1) 100%);
}

.vue-tel-input {
    border-radius: 8px;
    border: 1px solid #D1D5DB;
}
.vue-tel-input > input {
    background-color: rgba(249, 250, 251);
    border-radius: 0 8px 8px 0;
    padding-top: 11px;
    padding-bottom: 11px;
}
.error-alert {
  @apply text-xs text-red-500;
}
</style>

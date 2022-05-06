<template>
    <sidebar id="sidebar" class="lg:absolute grid lg:grid-cols-5 font-['open_sans'] z-10">
        <div class="ml-0 m-0 p-10 flex flex-col bg-gray-100 bg-cover text-gray-900">
            <div id="search">
            <div id="search filters" class="border-b-gray-500">
                <h5 class="text-2xl font-bold uppercase py-5">Search Filters</h5>
                <div id="simple-search">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Simple Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <img src="" alt="search icon" />
                            </div>
                            <input id="simple-search" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><img src="" alt="search icon" /></button>
                    </form>
                    <!--above from https://flowbite.com/docs/forms/search-input/-->
                    <!-- also see
                    https://flowbite.com/docs/forms/input-field/
                    https://flowbite.com/docs/forms/select/
                    https://flowbite.com/docs/components/sidebar/
                    -->
                </div>
                <div id="input fields" class="flex flex-col gap-y-3 py-5 border border-l-0 border-r-0 border-t-gray-500 border-b-gray-500 text-xl">
                    <legend class="text-xl font-bold uppercase">Text Input Fields</legend>
                    <div>
                        <label for="input1" class="font-bold max-w-full">Input Field 1:</label>
                        <input type="text" value="input here" placeholder="input here" class="border border-gray-500 rounded-lg" />
                    </div>
                    <div>
                        <label for="input2" class="font-bold max-w-full">Input Field 2:</label>
                        <input type="text" value="input here" placeholder="input here" class="border border-gray-500 rounded-lg" />
                    </div>
                    <div>
                        <label for="input3" class="font-bold max-w-full">Input Field 3:</label>
                        <input type="text" value="input here" placeholder="input here" class="border border-gray-500 rounded-lg" />
                    </div>
                </div>
                <div id="radio-buttons" class="flex flex-col gap-y-3 py-5 border border-l-0 border-r-0 border-b-gray-500 text-xl">
                <legend class="text-xl font-bold uppercase">Select One</legend>
                <div>
                    <input id="radio1" type="radio" value="radio1">
                    <label for="radio1" class="font-bold">Radio Field 1</label>
                </div>
                <div>
                    <input id="radio2" type="radio" value="radio2">
                    <label for="radio2" class="font-bold">Radio Field 2</label>
                </div>
                <div>
                    <input id="radio3" type="radio" value="radio3">
                    <label for="radio3" class="font-bold">Radio Field 3</label>
                </div>
                </div>
                <div id="radio-buttons-2" class="flex flex-col gap-y-3 py-5 border border-l-0 border-r-0 border-b-gray-500 text-xl">
                <legend class="text-xl font-bold uppercase">Select One</legend>
                <div>
                    <input id="radio-a" type="radio" value="radio-a">
                    <label for="radio-a" class="text-xl font-bold">Radio Field A</label>
                </div>
                <div>
                    <input id="radio-b" type="radio" value="radio-b">
                    <label for="radio-b" class="text-xl font-bold">Radio Field B</label>
                </div>
                <div>
                    <input id="radio-c" type="radio" value="radio-c">
                    <label for="radio-c" class="text-xl font-bold">Radio Field C</label>
                </div>
                <div>
                    <input id="radio-d" type="radio" value="radio-d">
                    <label for="radio-d" class="text-xl font-bold">Radio Field D</label>
                </div>
                </div>
                <div id="checkboxes" class="flex flex-col gap-y-3 py-5 border border-l-0 border-r-0 border-b-gray-500 text-xl">
                <fieldset>
                    <legend class="text-xl font-bold uppercase">Select All Relevant Fields</legend>
                    <div>
                    <input id="checkbox1" type="checkbox" value="checkbox1">
                    <label for="checkbox1" class="text-xl font-bold">Checkbox1</label>
                    </div>
                    <div>
                    <input id="checkbox2" type="checkbox" value="checkbox2">
                    <label for="checkbox2" class="text-xl font-bold">Checkbox2</label>
                    </div>
                    <div>
                    <input id="checkbox3" type="checkbox" value="checkbox3">
                    <label for="checkbox3" class="text-xl font-bold">Checkbox3</label>
                    </div>
                </fieldset>
                </div>
                <div id="text-input" class="flex flex-col gap-y-3 py-5 border border-l-0 border-r-0 border-b-gray-500 text-xl">
                    <label for="text" class="text-xl font-bold uppercase">text input</label>
                    <textarea id="text-area" class="border border-gray-500 rounded-lg">type here</textarea>
                </div>
                <div id="drop-down-select" class="flex flex-col gap-y-3 py-5 border border-l-0 border-r-0 border-b-gray-500 text-xl">
                    <label for="selection" class="text-xl font-bold uppercase">Drop down selection</label>
                    <select id="selection">
                        <option class="text-xl font-bold">Option 1</option>
                        <option class="text-xl font-bold">Option 2</option>
                        <option class="text-xl font-bold">Option 3</option>
                        <option class="text-xl font-bold">Option 4</option>
                    </select>
                </div>
                <div>
                    <button id="reset" @click="resetSearchFilters">Reset Search</button>
                    <button id="reset" @click="submitSearchFilters.prevent">Submit Search</button>
                    <!--codecademy places the @clicks at the <form> element, not at the buttons. <form @reset="resetForm"> <button type="reset"> Reset </button> </form> .. <script> ... methods: { resetForm: function() {...} } . Also, this is event handling.-->
                </div>
            </div>
            <div id="mood-sliders" class="flex flex-col gap-y-3 py-5 pb-10 border border-l-0 border-r-0 border-b-gray-500 text-xl bg-gray-100">
                <h5 class="text-2xl font-bold uppercase py-5">Mood Sliders </h5>
                <div id="range-slider-1">
                    <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Range Slider 1</label>
                    <input
                        id="minmax-range"
                        type="range"
                        min="0"
                        max="10"
                        value="5"
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none"
                    >
                </div>
                <div id="range-slider-2">
                    <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Range Slider 2</label>
                    <input
                        id="minmax-range"
                        type="range"
                        min="0"
                        max="10"
                        value="5"
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none"
                    >
                </div>
                <div id="range-slider-3">
                    <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Range Slider 2</label>
                    <input
                        id="minmax-range"
                        type="range"
                        min="0"
                        max="10"
                        value="5"
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none"
                    >
                </div>
                <div id="step-slider-1">
                    <label for="steps-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Step Slider 1</label>
                    <input
                        id="steps-range"
                        type="range"
                        min="0"
                        max="5"
                        value="2.5"
                        step="0.5"
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none">
                </div>
                <div id="large-range-slider">
                    <label for="large-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large Range Slider</label>
                    <input
                        id="large-range"
                        type="range"
                        value="50"
                        class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
                    >
                </div>
                <img src="/moodagentfilters.png" alt="" />
                <!--https://flowbite.com/docs/forms/range/-->
            </div>
            <div id="controls" class="flex flex-col gap-y-3 py-5 pb-20">
                <h5 class="text-2xl font-bold uppercase py-5">Controls </h5>
                <img src="/browsecontrols.png" alt="" />
            </div>
            </div>
        </div>
      </sidebar>
</template>

<script>
export default ({
  inputField1: '',
  inputField2: '',
  inputField3: '',
  radioField1: '',
  radioField2: '',
  checkboxField: [],
  optionField: '',

  methods: {
    /*
    resetSearchFilters: function () {
      this.inputField1 = '';
      this.inputField2 = '';
      this.inputField3 = '',
      this.radioField1 = '',
      this.radioField2 = '',
      this.checkboxField = [],
      this.optionField = 'option1',
    submitSearchFilters: function () {
      //searchaudiolibraryandreturnresults
    },
*/
  }
})
</script>

<template>
    <sidebar id="sidebar" class="lg:absolute grid lg:grid-cols-5 font-['open_sans'] z-10">
        <div class="ml-0 m-0 p-10 flex flex-col bg-gray-100 bg-cover text-gray-900">
            <div id="search">
            <div id="search filters" class="border-b-gray-500">
                <h5 class="text-2xl font-bold uppercase py-5">Search Filters</h5>
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
            </div>
            <div id="mood-sliders" class="flex flex-col gap-y-3 py-5 pb-10 border border-l-0 border-r-0 border-b-gray-500 text-xl bg-gray-100">
                <h5 class="text-2xl font-bold uppercase py-5">Mood Sliders </h5>
                <img src="/moodagentfilters.png" alt="" />
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
  radioField1: '',
  radioField2: '',
  checkboxField: [],
  optionField: '',

  methods: {
    /*
    resetForm: function () {
      ...
    }
    */
  }
})
</script>

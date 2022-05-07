<template>
    <div>
        <Header />
        <MoodBot />
        <BrowseSidebar />
        <h1 class="text-black text-6xl flex m-5 p-5">Website Under Construction</h1>
        <div>
            <table>
                <h5>Head</h5>
                <div>
                    <h6>subtitle</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                </div>
                <div>
                    <h6>subtitle</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                </div>
                <div>
                    <h6>subtitle</h6>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                    <div>
                        <img src="" alt="" />
                        <svg id="fav" />
                        <p> Song name </p>
                        <p> Artist </p>
                        <Controls />
                    </div>
                </div>
            </table>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  },
}
</script>

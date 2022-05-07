<template>
    <div>
        <Header />
        <MoodBot />
        <BrowseSidebar />
        <h1 class="text-black text-6xl flex m-5 p-5">Website Under Construction</h1>
        <div>
            <div>
                <h5>Head</h5>
                <div>
                    <h6>Your Playlist 1</h6>
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
                    <h6>Most Frequently Played</h6>
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
                    <h6>Today's Featured Music</h6>
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
                    <h6>Recommended For You</h6>
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
            </div>
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

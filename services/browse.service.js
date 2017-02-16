module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [
            {
                name: 'Kick 808 1',
                source: 'http://localhost:8080/test-sounds/Kick/Kick 808 1.wav',
                type: 'Kick',
            },
            {
                name: 'Rim Mononoke',
                source: 'http://localhost:8080/test-sounds/Snare/Rim Mononoke.wav',
                type: 'Snare',
            },

        ];
        
        const wads = [];
        for (let i = 0; i < sounds.length; i++) {
            sounds[i].index = i;

            wads.push(new Wad({
                source: sounds[i].source,
            }));
        };



        return {
            showSounds() {
                return sounds;

            },
            previewSounds(index) {
                // let wads = [];
                // for (let i = 0; i < sounds.length; i++) {
                //     wads.push(new Wad({
                //         source: sounds[i].source,
                //     }));
                    // if (wads[i].source === sounds[i].source) {
                        wads[index].play();
                        // console.log(wads[i]);
                    // };   
    
                // let i = wads[0];
                
            },

        }; 

    },
};
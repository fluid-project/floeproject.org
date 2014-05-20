
The version of Infusion included in this folder was created using a custom build from commit [37c3dae2783a58cde413e0dcd894320c3a29b73c](https://github.com/fluid-project/infusion/tree/37c3dae2783a58cde413e0dcd894320c3a29b73c) of the Infusion master branch [https://github.com/fluid-project/infusion/](https://github.com/fluid-project/infusion/) using the command line:

    grunt custom --source=true --include="uiOptions"

The following directories were stripped out of the build since they contain code that is included in the infusion-custom.js file:

* infusion/components/tableOfContents/js/
* infusion/components/slidingPanel/
* infusion/components/textfieldSlider/
* infusion/components/uiOptions/
* infusion/framework/core/
* infusion/framework/enhancement/
* infusion/framework/renderer/
* infusion/framework/preferences/js/

The following files were stripped out to reduce footprint:
    
* infusion/ReleaseNotes.txt
* infusion/components/tableOfContents/tableOfContentsDependencies.json
* infusion/framework/fss/fssDependencies.json
* infusion/framework/preferences/preferencesDependencies.json
* infusion/lib/fonts/fontsDependencies.json
    
The following directories were kept:

* infusion/lib/jquery/core/
* infusion/lib/jquery/plugins/
* infusion/lib/json/
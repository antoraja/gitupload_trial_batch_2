sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fioriui/test/integration/FirstJourney',
		'fioriui/test/integration/pages/EmployeeMain'
    ],
    function(JourneyRunner, opaJourney, EmployeeMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fioriui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeMain: EmployeeMain
                }
            },
            opaJourney.run
        );
    }
);

class NoMain {

    constructor() {
    }

    testCourt() {
        const courts: Array<Court> = new Array<Court>();
        courts.push(...[
            new CourtAustraliaOpen(),
            new CourtRolandGarros(),
            new CourtWimbledon(),
        ]);

        courts.forEach(element => {
            element.cutGrass();
        });

    }
}

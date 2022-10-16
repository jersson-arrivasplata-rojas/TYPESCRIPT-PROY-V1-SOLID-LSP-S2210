
class Main {

    constructor() {
        this.testGrassCourt();
    }

    testGrassCourt() {
        const courts: Array<ICourtGrass> = new Array<ICourtGrass>();
        courts.push(...[
            new CourtWimbledon(),
            new CourtMallorcaOpen()
        ]);

        for (const iterator of courts) {
            iterator.cutGrass();
        }
    }
}

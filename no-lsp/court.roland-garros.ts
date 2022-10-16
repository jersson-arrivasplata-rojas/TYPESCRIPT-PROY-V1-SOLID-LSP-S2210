class NoCourtRolandGarros extends Court {

    public cutGrass(): void {
        throw new Error("Tierra batida no tiene cesped que cortar");
    }
}
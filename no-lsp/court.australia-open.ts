class NoCourtAustraliaOpen extends Court {

    public cutGrass(): void {
        throw new Error("Pista dura no tiene cesped que cortar");
    }
}
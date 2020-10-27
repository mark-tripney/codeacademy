// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // Simulate a random, single-base mutation in the DNA
    mutate() {
      const randomIndex = Math.floor(Math.random() * dna.length);
      const baseToMutate = dna[randomIndex];
      let newBase = "";
      // Ensure that mutation does not result in the *same* base
      do {
        newBase = returnRandBase();
      } while (newBase === baseToMutate);
      dna.splice(randomIndex, 1, newBase);
      return dna;
    },
    // Deduce similarities between two DNAs, and return as percentage
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) {
          count++;
        }
      }
      console.log(
        `${this.dna.specimenNum} and ${pAequor.dna} have %${
          (count / 15) * 100
        } DNA in common.`
      );
    },
    // Resolve survival chance based on percentage of C & G bases in DNA
    willLikelySurvive() {
      let cgCount = 0;
      this.dna.forEach((base) => {
        if (base === "G" || base === "C") {
          cgCount++;
        }
      });
      return (cgCount / 15) * 100 > 60;
    },
  };
};

// Create an array of 30 samples, all with the 'survival' trait
const survivorSample = () => {
  const survivors = [];
  let specimenCount = 0;
  while (survivors.length < 30) {
    const specimen = pAequorFactory(specimenCount++, mockUpStrand());
    if (specimen.willLikelySurvive()) {
      survivors.push(specimen);
    }
  }
  return survivors;
};

console.log(survivorSample());

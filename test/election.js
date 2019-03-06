var Election = artifacts.require("./Election.sol");

contract("Election", function(account) {
  it("is initialized with two candidates", function() {
    return Election.deployed()
      .then(function(instance) {
        return instance.candidatesCount();
      })
      .then(function(count) {
        assert.equal(count, 2);
      });
  });

  it("initializes the Candidate 1 with the correct values", function() {
    return Election.deployed()
      .then(function(instance) {
        electionInstance = instance;
        return electionInstance.candidates(1);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 1, "contains the correct id");
        assert.equal(candidate[1], "Candidate 1", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct vote count");
      });
  });

  it("initializes the Candidate 1 with the correct values", function() {
    return Election.deployed()
      .then(function(instance) {
        electionInstance = instance;
        return electionInstance.candidates(2);
      })
      .then(function(candidate) {
        assert.equal(candidate[0], 2, "contains the correct id");
        assert.equal(candidate[1], "Candidate 2", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct vote count");
      });
  });

  it("allows a voter to cast a vote", function() {
    return Election.deployed()
      .then(function(instance) {
        electionInstance = instance;
        candidateId = 1;
        return electionInstance.vote(candidateId);
      })
      .then(function(receipt) {
        return electionInstance.voters(
          "0xd99E3F23C78E1177d318516EC5D269718E461aea"
        );
      })
      .then(function(voted) {
        assert(voted, "the voter was marked as voted");
        return electionInstance.candidates(candidateId);
      })
      .then(function(candidate) {
        var voteCount = candidate[2];
        assert.equal(voteCount, 1, "increments the candidate's vote count");
      });
  });
});

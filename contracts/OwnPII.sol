pragma solidity >=0.5.4;

contract OwnPII {
    struct PIIMessage {
        uint id;
        string name;
        string pii;
    }

    mapping(address => bool) public users;
    mapping(uint => PIIMessage) public pii;

    uint public pii;
    event HighestBidIncreased(uint id, string name);

    event savePII (
        uint indexed pii
    );

    function testContract (string memory id) public {

    }

    // function savePII (uint userId) public {
    //     require(!voters[msg.sender]);
    //     require(userId > 0);
    //     users[msg.sender] = true;
    //     candidates[userId].voteCount ++;
    // }


    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }


    function vote (uint _candidateId) public {
        require(!voters[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount ++;
        // emit votedEvent(_candidateId);
    }
}
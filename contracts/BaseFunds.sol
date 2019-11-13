pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract BaseFunds {
    address owner;
    uint256 totalFunds = 0;
    uint countMember = 0;
    uint countParty = 0;
    uint testCount = 0;
    struct Member{
        address id;
        string name;
        uint256 money;
        bool isValue;
    }
    struct Party{
        address creator;
        address[] members;
        uint256 money;
        string message;
        string date;
        bool paySuccess;
        bool isValue;
    }
    mapping(address=>Member) members;
    mapping(uint=>Party) parties;
    Member fundHost;
    Member[] memberList;
    Party[] partyList;

    function getTotalFund() public view returns (uint256) {
        return totalFunds;
    }
    function getFundHost() public view returns (Member memory) {
        return fundHost;
    }
    function getMemberList() public view returns (Member[] memory) {
        return memberList;
    }
    function getPartyList() public view returns (Party[] memory) {
        return partyList;
    }
    function getTestCount() public view returns (uint) {
        return testCount;
    }
    function addMember(Member memory member) public{
        memberList.push(member);
        members[msg.sender] = member;
        countMember++;
    }
    function addParty(Party memory party) public{
        partyList.push(party);
        parties[countParty] = party;
        countParty++;
    }

    function setTestCount(uint val) public {
        testCount += val;
    }
}
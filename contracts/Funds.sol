pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
import "./BaseFunds.sol";
contract Funds is BaseFunds {
    address owner;
    address baseFundsAdrr;
    BaseFunds baseFunds;
    modifier onlyOwner() { // Modifier
        require(
            msg.sender == owner,
            "Only Owner can call this."
        );
        _;
    }
    modifier onlyMember() { // Modifier
        require(
            msg.sender != owner,
            "Only Owner can call this."
        );
        _;
    }
    // modifier memberExists(address member) { // Modifier
    //     // Member[] memberList = baseFunds.memberList;
    //     bool checkExists = false;
    //     for(uint i = 0; i < baseFunds.getMemberList().length; i++) {
    //         if (baseFunds.getMemberList()[i].id == member) {
    //             checkExists = true;
    //             break;
    //         }
    //     }
    //     require(
    //         checkExists,
    //         "Member not exists"
    //     );
    //     _;
    // }
    constructor() public{
        owner = msg.sender;
        // fundHost = Member(msg.sender, "HOST", 0);
    }
    function getTotalFund() public view returns (uint256) {
        return baseFunds.getTotalFund();
    }
    function getFundHost() public view returns (Member memory) {
        return baseFunds.getFundHost();
    }
    function getMemberList(uint256 _page, uint256 _perPage) public view returns (Member[] memory) {
        return baseFunds.getMemberList(_page, _perPage);
    }
    function getMember(address addr) public view returns (Member memory) {
        return baseFunds.getMember(addr);
    }
    function getPartyList(uint256 _page, uint256 _perPage) public view returns (Party[] memory) {
        return baseFunds.getPartyList(_page, _perPage);
    }
    function getTestCount() public view returns (uint) {
        return baseFunds.getTestCount();
    }

    function setBaseFundAddress(address addr) public {
        baseFundsAdrr = addr;
        baseFunds = BaseFunds(addr);
    }
    function newMember(string memory _name) public payable{
        baseFunds.addMember(_name);
    }
    function newParty(address[] memory _members, uint256  _money, string memory  _message, string memory  _createdDate) public payable{
        baseFunds.addParty(_members, _money, _message, _createdDate);
    }
    function requestRejectParty(uint256 _id) public {
        Party memory _party = baseFunds.getParty(_id);
        _party.requestReject = true;
        baseFunds.updatePartyByCreator(_id, _party.members, _party.money, _party.message, _party.createdDate, _party.requestReject);
    }
    function rejectParty(uint256 _id) public {
        baseFunds.updatePartyByOwner(_id, false, true);
    }
    function acceptParty(uint256 _id) public {
        baseFunds.updatePartyByOwner(_id, true, false);
        Party memory _party = baseFunds.getParty(_id);
        uint256 _moneyShared = _party.money / _party.members.length;
        for(uint256 i = 0; i < _party.members.length; i++){
            baseFunds.updateMemberMoney(_party.members[i], -_moneyShared);
        }
    }
    function setTestCount(uint val) public {
        baseFunds.setTestCount(val);
        // baseFunds.testCount = val;
    }
    function getAllMember() public view returns (Member[] memory) {
        return baseFunds.getAllMember();
    }
}
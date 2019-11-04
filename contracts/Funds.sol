pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract Funds {
    address owner;
    uint256 totalFunds = 0;
    uint countParty = 0;
    struct Member{
        address id;
        string name;
        uint256 money;
    }
    
    struct Party{
        address creator;
        address[] members;
        uint256 money;
        string message;
        string date;
        bool paySuccess;
    }
    
    mapping(address=>Member) members;
    Member fundHost;
    Member[] memberList;
    Party[] partyList;
    
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
    
    modifier memberExists(address member) { // Modifier
        bool checkExists = false;
        for(uint i = 0; i < memberList.length; i++) {
            if (memberList[i].id == member) {
                checkExists = true;
                break;
            }
        }
        require(
            checkExists,
            "Member not exists"
        );
        _;
    }
    
    modifier memberNotExists(address member) { // Modifier
        bool checkExists = false;
        for(uint i = 0; i < memberList.length; i++) {
            if (memberList[i].id == member) {
                checkExists = true;
                break;
            }
        }
        require(
            !checkExists,
            "Member is exists"
        );
        _;
    }
 
    
    constructor() public{
        owner = msg.sender;
        fundHost = Member(msg.sender, "HOST", 0);
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
    
    function test(uint256 val) public{
        totalFunds = val;
    }
    
    function newMember(string memory _name) public payable memberNotExists(msg.sender){
        Member memory member = Member(msg.sender, _name, 0);
        members[msg.sender] = member;
        memberList.push(member);
    }
    
    function newMember2(string memory _name) public memberNotExists(msg.sender){
        Member memory member = Member(msg.sender, _name, 0);
        members[msg.sender] = member;
        memberList.push(member);
    }
    
    function payIn(address _member, uint256 _money) public onlyOwner memberExists(_member) {
        members[_member].money += _money;
        fundHost.money += _money;
    }
    
    function transferMoney(address _member, uint256 _money) public onlyOwner memberExists(_member) {
        members[msg.sender].money -= _money;
        members[_member].money += _money;
    }
    
    function createParty(address[] memory _members, uint256  _money, string memory  _message, string memory  _date) public{
        partyList.push(Party(msg.sender, _members, _money, _message, _date, false));
        countParty++;
    }
    
    function payForParty(uint index) public onlyOwner{
        if(index >= countParty) return;
        Party memory party = partyList[index];
        if(!party.paySuccess){
            party.paySuccess = true;
            uint _money = party.money / party.members.length;
            for(uint i = 0; i< party.members.length; i++){
                members[party.members[i]].money -= _money;
            }
            fundHost.money -= party.money;
        }
    }
}
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
        string createdDate;
        bool paySuccess;
        bool reject;
        bool requestReject;
        bool isValue;
    }
    mapping(address=>Member) members;
    mapping(uint256=>Party) parties;
    Member fundHost;
    Member[] memberList;
    Party[] partyList;
    modifier memberNotExists(address _member) {
        bool checkExists = members[_member].isValue;
        require(
            !checkExists,
            "Member is exists"
        );
        _;
    }
    modifier onlyCreatorCanUpdateParty(uint256 _id, address _member) {
        bool _canUpdate = true;
        Party memory _party = parties[_id];
        if(_party.reject || _party.paySuccess || !_party.isValue){
            _canUpdate = false;
        }
        if(_party.creator != _member){
            _canUpdate = false;
        }
        require(
            !_canUpdate,
            "Cannot update party"
        );
        _;
    }
    modifier onlyOwnerCanUpdateParty(uint256 _id, address _member) {
        bool _canUpdate = true;
        Party memory _party = parties[_id];
        if(_party.reject || _party.paySuccess || !_party.isValue){
            _canUpdate = false;
        }
        if(owner != _member){
            _canUpdate = false;
        }
        require(
            !_canUpdate,
            "Cannot update party"
        );
        _;
    }

    function getTotalFund() public view returns (uint256) {
        return totalFunds;
    }
    function getFundHost() public view returns (Member memory) {
        return fundHost;
    }
    function getMemberList(uint256 _page, uint256 _perPage) public view returns (Member[] memory) {
        Member[] memory _memberList = new Member[](_perPage);
        uint256 _fromIndex = (_page - 1) * _perPage;
        uint256 _toIndex = _page * _perPage;
        for(uint i = _fromIndex; i < _toIndex; i++) {
            _memberList[i - _fromIndex] = memberList[i];
        }
        return _memberList;
    }
    function getMember(address _addr) public view returns (Member memory) {
        return members[_addr];
    }
    function getPartyList(uint256 _page, uint256 _perPage) public view returns (Party[] memory) {
        Party[] memory _partyList = new Party[](_perPage);
        uint256 _fromIndex = (_page - 1) * _perPage;
        uint256 _toIndex = _page * _perPage;
        for(uint i = _fromIndex; i < _toIndex; i++) {
            _partyList[i - _fromIndex] = parties[i];
        }
        return _partyList;
    }
    function getParty(uint256 _id) public view returns (Party memory) {
        return parties[_id];
    }
    function getTestCount() public view returns (uint) {
        return testCount;
    }
    function addMember(string memory _name) public memberNotExists(msg.sender){
        Member memory member = Member(msg.sender, _name, 0, true);
        memberList.push(member);
        members[msg.sender] = member;
        countMember++;
    }
    function updateMember(address _addr, string memory _name, uint256 _money) public {
        Member memory _member = members[_addr];
        _member.name = _name;
        _member.money = _money;
        members[_addr] = _member;
    }
    function updateMemberMoney(address _addr, uint256 _money) public {
        Member memory _member = members[_addr];
        _member.money += _money;
        updateMember(_addr, _member.name, _member.money);
    }
    function addParty(address[] memory _members, uint256  _money, string memory  _message, string memory  _createdDate) public{
        Party memory _party = Party(msg.sender, _members, _money, _message, _createdDate, false, false, false, true);
        partyList.push(_party);
        parties[countParty] = _party;
        countParty++;
    }
    function updatePartyByCreator(
        uint256 _id, address[] memory _members, uint256 _money, string memory _message, string memory _createdDate, bool _requestReject
    ) public onlyCreatorCanUpdateParty(_id, msg.sender){
        Party memory _party = parties[_id];
        _party.members = _members;
        _party.money = _money;
        _party.message = _message;
        _party.createdDate = _createdDate;
        _party.requestReject = _requestReject;
        partyList[_id] = _party;
        parties[_id] = _party;
    }
    function updatePartyByOwner(uint256 _id, bool _paySuccess, bool _reject)
    public onlyOwnerCanUpdateParty(_id, msg.sender) {
        Party memory _party = parties[_id];
        _party.paySuccess = _paySuccess;
        _party.reject = _reject;
        partyList[_id] = _party;
        parties[_id] = _party;
    }

    function setTestCount(uint val) public {
        testCount += val;
    }
    function getAllMember() public view returns (Member[] memory) {
        return memberList;
    }
}
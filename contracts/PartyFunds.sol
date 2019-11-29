pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract PartyFunds {
    address owner;
    int256 totalFunds = 0;
    uint countMember = 0;
    uint countParty = 0;
    uint countTransferHistory = 0;
    struct Member{
        address id;
        string name;
        int256 money;
        uint256 index;
        bool isValue;
    }
    struct Payer{
        address member;
        int256 money;
    }
    struct Party{
        address creator;
        address[] payerAddress;
        int256[] payerMoney;
        address[] members;
        uint256 money;
        string message;
        string createdDate;
        bool paySuccess;
        bool reject;
        bool requestReject;
        bool isValue;
    }
    struct TransferHistory{
        address sender;
        address receiver;
        int256 money;
        bool isDeposit;
        bool accept;
    }
    mapping(address=>Member) members;
    mapping(uint256=>Party) parties;
    mapping(uint256=>TransferHistory) transferHistories;
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
    modifier memberExists(address _member) {
        bool checkExists = members[_member].isValue;
        require(
            checkExists,
            "Member is not exists"
        );
        _;
    }
    modifier partyValidate(address[] memory _payerAddress, int256[] memory _payerMoney) {
        bool passValidate = true;
        if(_payerAddress.length != _payerMoney.length){
            passValidate = false;
        }
        for(uint256 i = 0; i < _payerAddress.length; i++){
            passValidate = passValidate && members[_payerAddress[i]].isValue;
        }
        require(
            passValidate,
            "Check party validate fail"
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

    function getTotalFund() public view returns (int256) {
        return totalFunds;
    }
    function getFundHost() public view returns (Member memory) {
        return fundHost;
    }
    function getMemberList(uint256 _page, uint256 _perPage) public view returns (Member[] memory) {
        uint256 _fromIndex = (_page - 1) * _perPage;
        uint256 _toIndex = _page * _perPage;
        uint256 countItems = 0;
        if(_toIndex > countMember){
            countItems = countMember - _fromIndex;
            _toIndex = countItems + _fromIndex;
        }
        else {
            countItems = _perPage;
        }
        Member[] memory _memberList = new Member[](countItems);
        for(uint i = _fromIndex; i < _toIndex; i++) {
            _memberList[i - _fromIndex] = memberList[i];
        }
        return _memberList;
    }
    function getMember(address _addr) public view returns (Member memory) {
        return members[_addr];
    }
    function getPartyList(uint256 _page, uint256 _perPage) public view returns (Party[] memory) {
        uint256 _fromIndex = (_page - 1) * _perPage;
        uint256 _toIndex = _page * _perPage;
        uint256 countItems = 0;
        if(_toIndex > countParty){
            countItems = countParty - _fromIndex;
            _toIndex = countItems + _fromIndex;
        }
        else {
            countItems = _perPage;
        }
        Party[] memory _partyList = new Party[](countItems);
        for(uint i = _fromIndex; i < _toIndex; i++) {
            _partyList[i - _fromIndex] = parties[i];
        }
        return _partyList;
    }
    function getParty(uint256 _id) public view returns (Party memory) {
        return parties[_id];
    }
    function getTransferHistoriyList(uint256 _page, uint256 _perPage) public view returns (TransferHistory[] memory){
        uint256 _fromIndex = (_page - 1) * _perPage;
        uint256 _toIndex = _page * _perPage;
        uint256 countItems = 0;
        if(_toIndex > countTransferHistory){
            countItems = countTransferHistory - _fromIndex;
            _toIndex = countItems + _fromIndex;
        }
        else {
            countItems = _perPage;
        }
        TransferHistory[] memory _transferHistoryList = new TransferHistory[](countItems);
        for(uint i = _fromIndex; i < _toIndex; i++) {
            _transferHistoryList[i - _fromIndex] = transferHistories[i];
        }
        return _transferHistoryList;
    }
    function addMember(string memory _name) public memberNotExists(msg.sender){
        Member memory member = Member(msg.sender, _name, 0, countMember, true);
        memberList.push(member);
        members[msg.sender] = member;
        countMember++;
    }
    function updateMember(address _addr, string memory _name, int256 _money) public {
        members[_addr].name = _name;
        members[_addr].money = _money;
        memberList[members[_addr].index] = members[_addr];
    }
    function updateMemberMoney(address _addr, int256 _money, bool _isAdd) public memberExists(_addr) {
        if(_isAdd){
            members[_addr].money += _money;
        }
        else {
            members[_addr].money -= _money;
        }
        memberList[members[_addr].index] = members[_addr];
    }
    function addParty(
        address[] memory _payerAddress, int256[] memory _payerMoney, address[] memory _members, uint256  _money, string memory  _message, string memory  _createdDate
    ) public partyValidate(_payerAddress, _payerMoney) {
        Party memory _party = Party(
            msg.sender,
            _payerAddress,
            _payerMoney,
            _members,
            _money,
            _message,
            _createdDate,
            false,
            false,
            false,
            true
        );
        partyList.push(_party);
        parties[countParty] = _party;
        countParty++;
    }
    function updatePartyByCreator(
        uint256 _id, address[] memory _payerAddress, int256[] memory _payerMoney, address[] memory _members, uint256 _money, string memory _message, string memory _createdDate, bool _requestReject
    ) public onlyCreatorCanUpdateParty(_id, msg.sender) {
        Party memory _party = parties[_id];
        _party.members = _members;
        _party.payerAddress = _payerAddress;
        _party.payerMoney = _payerMoney;
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
    function addTransferHistory(address _receiver, int256 _money, bool _isDeposit, bool _accept) public {
        transferHistories[countTransferHistory] = TransferHistory(msg.sender, _receiver, _money, _isDeposit, _accept);
        countTransferHistory++;
    }
    function updateTransferHistory(uint256 _id, address _receiver, int256 _money, bool _isDeposit, bool _accept) public {
        TransferHistory memory _transferHistory = transferHistories[_id];
        _transferHistory.sender = msg.sender;
        _transferHistory.receiver = _receiver;
        _transferHistory.money = _money;
        _transferHistory.isDeposit = _isDeposit;
        _transferHistory.accept = _accept;
        transferHistories[_id] = _transferHistory;
    }
    function transferMoney(address _receiver, int256 _money) public {
        updateMemberMoney(msg.sender, _money, false);
        updateMemberMoney(_receiver, _money, true);
        addTransferHistory(_receiver, _money, false, true);
    }
    function requestRejectParty(uint256 _id) public {
        Party memory _party = getParty(_id);
        _party.requestReject = true;
        updatePartyByCreator(
            _id,
            _party.payerAddress,
            _party.payerMoney,
            _party.members,
            _party.money,
            _party.message,
            _party.createdDate,
            _party.requestReject
        );
    }
    function rejectParty(uint256 _id) public {
        updatePartyByOwner(_id, false, true);
    }
    function acceptParty(uint256 _id) public {
        Party memory _party = getParty(_id);
        if(!_party.paySuccess){
            updatePartyByOwner(_id, true, false);
            uint256 _moneyShared = _party.money / _party.members.length;
            for(uint256 i = 0; i < _party.payerAddress.length; i++){
                updateMemberMoney(_party.payerAddress[i], _party.payerMoney[i], true);
            }
            for(uint256 j = 0; j < _party.members.length; j++){
                updateMemberMoney(_party.members[j], int256(_moneyShared), false);
            }
        }
    }
}
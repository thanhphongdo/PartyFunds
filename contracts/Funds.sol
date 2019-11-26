pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
import "./BaseFunds.sol";
contract Funds is BaseFunds {
    address owner;
    address baseFundsAdrr;
    BaseFunds baseFunds;
    constructor() public{
        owner = msg.sender;
    }
    function setBaseFundAddress(address addr) public {
        baseFundsAdrr = addr;
        baseFunds = BaseFunds(addr);
    }
    function newMember(string memory _name) public payable{
        baseFunds.addMember(msg.sender, _name);
    }
    function transferMoney(address _receiver, int256 _money) public {
        baseFunds.updateMemberMoney(msg.sender, - _money);
        baseFunds.updateMemberMoney(_receiver, _money);
        baseFunds.addTransferHistory(msg.sender, _receiver, _money, false, true);
    }
    function newParty(
        address[] memory _payerAddress, int256[] memory _payerMoney, address[] memory _members, uint256  _money, string memory  _message, string memory  _createdDate
        ) public payable{
        baseFunds.addParty(msg.sender, _payerAddress, _payerMoney, _members, _money, _message, _createdDate);
    }
    function requestRejectParty(uint256 _id) public {
        Party memory _party = baseFunds.getParty(_id);
        _party.requestReject = true;
        baseFunds.updatePartyByCreator(
            msg.sender,
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
        baseFunds.updatePartyByOwner(msg.sender, _id, false, true);
    }
    function acceptParty(uint256 _id) public {
        Party memory _party = baseFunds.getParty(_id);
        if(!_party.paySuccess){
            baseFunds.updatePartyByOwner(msg.sender, _id, true, false);
            uint256 _moneyShared = _party.money / _party.members.length;
            for(uint256 i = 0; i < _party.members.length; i++){
                baseFunds.updateMemberMoney(_party.members[i], -int256(_moneyShared));
            }
        }
    }
    function getPartySharedCost(uint256 _id) public view returns (uint256) {
        Party memory _party = baseFunds.getParty(_id);
        uint256 _moneyShared = _party.money / _party.members.length;
        return _moneyShared;
    }
    function getTotalFund() public view returns (int256) {
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
}
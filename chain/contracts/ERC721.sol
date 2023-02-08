// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract ERC721 /* is ERC165 */ {

    string private _name; // ETHEREUM
    string private _symbol;
    uint private _totalSupply;

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    mapping(uint256 => string) private _tokenInfo;
    mapping(uint256 => address) private _owners;
    // 사용자의 잔고 관리
    mapping(address => uint256) private _balances;
    mapping(uint256 => address) private _tokenApprovals;
    mapping(address => mapping(address => bool)) private _operatorApprovals;
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    function balanceOf(address _owner) external view returns (uint256) {
        return _balances[_owner];
    }
    function ownerOf(uint256 _tokenId) external view returns (address) {
        return _owners[_tokenId];
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }
    // 총 발행량
    function totalSupply() public view returns (uint) {
        return _totalSupply;
    }

    
    function approve(address _to, uint256 _tokenId) external payable {
        require(_owners[_tokenId] == msg.sender, "Incorrect Owner");
        _tokenApprovals[_tokenId] = _to;
        emit Approval(_owners[_tokenId], _to, _tokenId);
    }

    function setApprovalForAll(address _owner, address _operator, bool _approved) public {
        _operatorApprovals[_owner][_operator];
        emit ApprovalForAll(_owner, _operator, _approved);
    }

    function getApproved(uint256 _tokenId) public view returns (address) {
        return _tokenApprovals[_tokenId];
    }

    

    function isApprovedForAll(address _owner, address _operator) public view returns (bool) {
        return _operatorApprovals[_owner][_operator];
    }
    
    function mint(address to, string memory metadataURI) public {
        _balances[to] += 1;
        _totalSupply += 1;
        _owners[_totalSupply] = to;
        _tokenInfo[_totalSupply] = metadataURI;
        emit Transfer(address(0), to, _totalSupply);
    }

    function burn(uint256 tokenId) public {
        address owner = _owners[tokenId];
        delete _tokenApprovals[tokenId];
        _balances[owner] -= 1;
        delete _owners[tokenId];
        emit Transfer(owner, address(0), tokenId);

    }

    function tokenInfo(uint256 _tokenId) public view returns (string memory) {
        return _tokenInfo[_tokenId];
    }

    function transfer(
        address _from,
        address _to,uint256 _tokenId
    ) public {
        require(_owners[_tokenId] == msg.sender, "Incorrect Owner");
        delete _tokenApprovals[_tokenId];

        _balances[_from] -= 1;
        _balances[_to] += 1;
        _owners[_tokenId] = _to;

        emit Transfer(_from, _to, _tokenId);
    }

    // 돈보내기
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable {
        address _owner = _owners[_tokenId];
        require(((msg.sender == _owner || isApprovedForAll(_owner, msg.sender)) || getApproved(_tokenId)==msg.sender),"Not Approved");
        transfer(_from, _to,_tokenId);
    }
}

interface ERC165 {
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}
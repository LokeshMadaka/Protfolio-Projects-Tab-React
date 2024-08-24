import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabItem(tabId)
  }

  const isActiveTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

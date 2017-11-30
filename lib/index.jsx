
import './index.scss';

/**
 * Return react elements.
 *
 * @param {Array} dataStrcut You can format the data by dataStrcut.
 * @param {Object} data The original data.
 */

export default (dataStrcut, data) => {
  if (Object.prototype.toString.call(dataStrcut) !== '[object Array]') {
    console.error('Array is needed');
    return
  }
  return (<div className="detail-page-format">
    {dataStrcut.map((d, i) => {
      if (d.disabled) {
        return
      }

      const {
        labelCol = 6,
        contentCol = 6
      } = (d.layout || {})

      return （<div key={d.id}>
        {
          d.label
          ? <div className={`.col-${labelCol}`}>{d.label}</div>
          : null
        }
        {
          d.render
          ? d.render(data[d.id], data, i)
          : <div className={`.col-${contentCol}`}>{data[d.id]}</div>
        }
      </div>）
    })}
  </div>)
}
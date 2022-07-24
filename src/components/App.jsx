import { useSelector, useDispatch } from 'react-redux';
import { Tdata, Tsum, Tmeans } from './table/table.styled';
import { calcSums, calcMeans } from './table/operateMatryx';
import { changeData, setPercent } from './reducers/dataSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { data, percent } = useSelector(store => store);
  const sumsColumn = calcSums(data);
  const meansLine = calcMeans(data);

  const showPercent = (idx) => {
    const totalSumm = sumsColumn.reduce((accum, next) => accum + next, 0);
    const calcPercent = ((sumsColumn[idx] / totalSumm) * 100).toFixed(1);
    dispatch(setPercent({ calcPercent, idx }));
  }

  return (
    <table>
      {/* header row */}
      <thead>
        <tr> 
          <Tsum>Summ</Tsum>
          {meansLine.map((el, idx) => (
            <Tmeans key={`m${idx}`}>{el}</Tmeans>
          ))}
        </tr>
      </thead>
      {/* main table */}
      <tbody>
        {data.map((line, idxRow) => (   // row
          <tr key={`s${idxRow}`}>
            <Tsum
            onMouseEnter={() => showPercent(idxRow)}
              onMouseLeave={() => dispatch(setPercent({ calcPercent: undefined, idx: idxRow }))}>
              {percent[idxRow] === undefined ? sumsColumn[idxRow] : `${percent[idxRow]} %`}
            </Tsum>
            {line.map((el, idxCol) => (   // columns
              <Tdata key={`s${idxRow}-d${idxCol}`} onClick={() => dispatch(changeData({x:idxRow, y:idxCol}))}>{el.value}</Tdata>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

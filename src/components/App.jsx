import { useSelector } from 'react-redux';
import { Tdata, Tsum, Tmeans } from './table/table.styled';
import { calcSums, calcMeans } from './table/operateMatryx';

export const App = () => {
const data = useSelector(store => store.data);
const sumsColumn = calcSums(data);
const meansLine = calcMeans(data);
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
        {data.map((line, idx1) => (
          <tr><Tsum key={`s${idx1}`}>{sumsColumn[idx1]}</Tsum>
            {line.map((el, idx2) => (
              <Tdata key={`s${idx1}-d${idx2}`}>{el.value}</Tdata>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

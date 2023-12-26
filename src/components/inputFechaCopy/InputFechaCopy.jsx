import { useFormik } from 'formik';
import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { useRef } from 'react';

export default function InputFechaCopy() {
  let minDate = new Date();

  addLocale('es', {
    firstDayOfWeek: 1,
    showMonthAfterYear: true,
    dayNames: [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthNamesShort: [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ],
    today: 'Hoy',
    clear: 'Limpiar',
  });

  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Reserva Solicitada para la fecha',

      detail:
        formik.values.date.toLocaleDateString('es', {
          month: 'long',
          day: 'numeric',
        }) +
        ' ' +
        formik.values.hour.toLocaleString('es', {
          hour: '2-digit',
          minute: '2-digit',
        }) +
        ' hs.',
      life: 4000,
    });
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      hour: '',
    },
    validate: data => {
      let errors = {};

      if (!data.date) {
        errors.date = 'La fecha es requerida';
      } else if (!data.hour) {
        errors.hour = 'La hora es requerida';
      }

      return errors;
    },
    onSubmit: data => {
      if (!formik.errors.date && !formik.errors.hour) {
        data && show(data);
        formik.resetForm();
      }
    },
  });

  const isFormFieldInvalid = name =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = name => {
    return isFormFieldInvalid(name) ? (
      <small className="bg-danger rounded p-1 text-white p-error">
        {formik.errors[name]}
      </small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
        <Toast ref={toast} position="top-center" />
        <div>{getFormErrorMessage('date')}</div>
        <Calendar
          inputId="cal_date"
          name="date"
          value={formik.values.date}
          className={classNames('mb-4 ', {
            'p-invalid': isFormFieldInvalid('date'),
          })}
          locale="es"
          minDate={minDate}
          dateFormat="dd/mm/yy"
          placeholder="Selecciona una fecha"
          onChange={e => {
            formik.setFieldValue('date', e.target.value);
          }}
        />

        <div className="flex-auto">
          <div>{getFormErrorMessage('hour')}</div>

          <Calendar
            id="calendar-timeonly"
            value={formik.values.hour}
            stepMinute={15}
            className={classNames({
              'p-invalid': isFormFieldInvalid('hour'),
            })}
            onChange={e => {
              formik.setFieldValue('hour', e.target.value);
            }}
            timeOnly
            placeholder="Selecciona una hora"
          />
        </div>
        <Button
          className="btn border-light   btn-md white-hover text-white btn-body-sala  mt-4 mb-4"
          type="submit"
          label="Solicitar Reserva"
        />
      </form>
    </div>
  );
}
